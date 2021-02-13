package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {

	@Id
	@Column(name = "id")
	private Long employeeId;
	@NotBlank(message = "first name should not be blank")
//	@Column(length = 20 , name = "firstName") @Size(max = 20)
	private String firstName;
	@NotBlank(message = "last name should not be blank")
//	@Column(length = 20) @Size(max = 20)
	private String lastName;

//	@Column(length = 10) @Size(max = 10)
//	@Transient
	@NotBlank(message = "extension should not be blank")
	private String extension;
	@NotBlank(message = "email should not be blank")
	@Email(message = "email should be valid")
//	@Column(length = 40 , nullable = false) @Size(max = 40)
	private String emailId;

//	@ManyToOne
//	@JoinColumn(name = "officeCode")
	@NotNull(message = "office code should not blank")
	private Integer officeCode;
	private Integer reportsTo;

//	@Column(length = 20) @Size(max = 25)
	@NotBlank(message = "job title should not be blank")
	private String jobTitle;

}