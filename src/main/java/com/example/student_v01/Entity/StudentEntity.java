package com.example.student_v01.Entity;

import com.example.student_v01.PostDTO.PostStudentDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "student_entity")
public class StudentEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "birthYear")
    private int birthYear;
    @Column(name = "classNumber")
    private int classNumber;
    // public static StudentEntity convertToEntity(PostStudentDTO postStudentDTO) {
    //     return null;
    // }
}
