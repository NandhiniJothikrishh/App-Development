package com.nandha.meow.Entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity

@Table(name="orderdata")

public class ProductEntity {
			@Id
			@GeneratedValue(strategy=GenerationType.AUTO)
			private int id;
			private String name;
			private String email;
			public String getEmail() {
				return email;
			}
			public void setEmail(String email) {
				this.email = email;
			}
			public String getAddress() {
				return address;
			}
			public void setAddress(String address) {
				this.address = address;
			}
			public String getPostcode() {
				return postcode;
			}
			public void setPostcode(String postcode) {
				this.postcode = postcode;
			}
			public String getCity() {
				return city;
			}
			public void setCity(String city) {
				this.city = city;
			}
			public String getCountry() {
				return country;
			}
			public void setCountry(String country) {
				this.country = country;
			}
			private String phone;
			public ProductEntity(int id, String name, String email, String phone, String address, String postcode,
					String city, String country) {
				super();
				this.id = id;
				this.name = name;
				this.email = email;
				this.phone = phone;
				this.address = address;
				this.postcode = postcode;
				this.city = city;
				this.country = country;
			}
			private String address;
			private String postcode;
			private String city;
			private String country;
			
			public int getId() {
				return id;
			}
			public void setId(int id) {
				this.id = id;
			}
			public String getName() {
				return name;
			}
			public void setName(String name) {
				this.name = name;
			}
			public String getPhone() {
				return phone;
			}
			public void setPhone(String phone) {
				this.phone = phone;
			}
			
			public ProductEntity() {}
		
	}