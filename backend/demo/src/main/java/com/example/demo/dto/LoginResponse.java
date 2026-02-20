package com.example.demo.dto;

public class LoginResponse {
    private Long id;
    private String fullName;
    private String email;
    private String message;

    public LoginResponse(Long id, String fullName, String email, String message) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.message = message;
    }

    public Long getId() { return id; }
    public String getFullName() { return fullName; }
    public String getEmail() { return email; }
    public String getMessage() { return message; }
}