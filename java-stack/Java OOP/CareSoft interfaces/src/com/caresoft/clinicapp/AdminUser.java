package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
	private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents = new ArrayList<String>();

    // TO DO: Implement a constructor that takes an ID and a role

    public AdminUser(Integer employeeID , String role) {
        this.role = role;
        this.id = employeeID;
    }

    // TO DO: Implement HIPAACompliantUser!
    public boolean assignPin(int pin){
        return pin >= 10000 && pin <= 99999;
    }

    public boolean accessAuthorized(Integer confirmedAuthID){
        return this.id == confirmedAuthID;
    }

    // TO DO: Implement HIPAACompliantAdmin!
    public ArrayList<String> reportSecurityIncidents(){
        authIncident();
        return this.getSecurityIncidents();

    }
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }


    // TO DO: Setters & Getters

    public Integer getEmployeeID() {
        return employeeID;
    }

    public String getRole() {
        return role;
    }

    public ArrayList<String> getSecurityIncidents() {
        return securityIncidents;
    }

    public void setEmployeeID(Integer employeeID) {
        this.employeeID = employeeID;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setSecurityIncidents(ArrayList<String> securityIncidents) {
        this.securityIncidents = securityIncidents;
    }
}
