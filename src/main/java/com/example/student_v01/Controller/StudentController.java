package com.example.student_v01.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.student_v01.Entity.StudentEntity;
import com.example.student_v01.PostDTO.PostStudentDTO;
import com.example.student_v01.Service.StudentService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1/student")
public class StudentController {

    @Autowired
    StudentService studentService;

    // @PostMapping("/create")
    // public String createStudent(@RequestBody StudentEntity studentEntity){
    //     return studentService.createStudent(studentEntity);
    // }

    @PostMapping("/create")
    public String createStudent(@RequestBody PostStudentDTO postStudentDTO){
        System.out.println("CCCCCCCCCCCCCCCCCCCCCCCCcontroller");
        System.out.println(postStudentDTO.toString());
        System.out.println("SSSSSSSSSSSSSSSSSSSStudent DTO original Form :\n" + postStudentDTO);
        return studentService.createStudent(postStudentDTO);
    }

    @GetMapping("/getAll")
    public List<StudentEntity> getAllStudents(){
        return studentService.getAllStudents();
    }
    
}
