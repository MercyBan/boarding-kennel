package com.tutoring.boardingkennel.services;

import com.tutoring.boardingkennel.models.BoardingFacility;
import com.tutoring.boardingkennel.repositories.BoardingFacilityRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.Map;

public class BoardingFacilityServiceImpl implements BoardingFacilityService{

    @Autowired
    BoardingFacilityRepo facilityRepo;

    @Override
    public Map<String, Integer> getAvailability() {
        HashMap<String, Integer> availability = new HashMap<>();
        BoardingFacility boardingFacility = facilityRepo.findByName("Tutor Kennel");
        return availability;
    }
}
