package com.example.student_v01.Convertor;

import com.example.student_v01.Entity.StudentEntity;
import com.example.student_v01.PostDTO.PostStudentDTO;

public class StudentDTOtoEntity {

    public static StudentEntity convertToEntity(PostStudentDTO postStudentDTO) {

        StudentEntity studentEntity = StudentEntity.builder().name(postStudentDTO.getName()).birthYear(postStudentDTO.getBirthYear()).classNumber(postStudentDTO.getClassNumber()).build();
            

        return studentEntity;
    }
    
}
