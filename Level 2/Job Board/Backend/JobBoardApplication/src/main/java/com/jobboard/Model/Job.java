package com.jobboard.Model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Job {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer jobId;
	
	private String companyImage;
	
	private String companyName;
	
	private String jobTitle;
	
	private String jobLocation;
	
	private Date jobCreatedOn;
	
	private String jobDescription;
	
	private String jobTechStacks;
	
	private String jobSalaryRange;
	
	private String jobNoticePeriod;
	
	private String jobType;
	
	private String jobRolesAndReponsibilities;

}
