package com.tutoring.boardingkennel.models;

public class BoardingFacility {

    private String name;
    private Long id;
    private int numberOfSmallKennels;
    private int numberOfMediumKennels;
    private int numberOfLargeKennels;
//    private List<Dog>dogs;

    public BoardingFacility(){

    }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public int getNumberOfSmallKennels() {
        return numberOfSmallKennels;
    }

    public int getNumberOfMediumKennels() {
        return numberOfMediumKennels;
    }

    public int getNumberOfLargeKennels() {
        return numberOfLargeKennels;
    }

//    public List<Dog> getDogs() {
//        return dogs;
//    }

    public BoardingFacility(String name, int numberOfSmallKennels, int numberOfMediumKennels,
                            int numberOfLargeKennels){
        this.name = name;
//        this.dogs = dogs;
        this.numberOfSmallKennels = numberOfSmallKennels;
        this.numberOfMediumKennels = numberOfMediumKennels;
        this.numberOfLargeKennels = numberOfLargeKennels;







    }
}
