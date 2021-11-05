package com.devsuperior.dsvendas.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.devsuperior.dsvendas.entities.Sale;

public class SaleDTO implements Serializable {

		
		private static final long serialVersionUID = 1L;
		private Long Id;
		private Integer visited;
		private Integer deals;
		private Double amount;
		private LocalDate Date;
				
		private SellerDTO seller;
		
		public SaleDTO() {
			
		}


		public SaleDTO(Long id, Integer visited, Integer deals, Double amount, LocalDate date, SellerDTO seller) {
			super();
			Id = id;
			this.visited = visited;
			this.deals = deals;
			this.amount = amount;
			Date = date;
			
			this.seller = seller;
		}
		
	
		
		public SaleDTO(Sale entity) {
			Id = entity.getId();
			visited =entity.getVisited();
			deals = entity.getDeals();
			amount =entity.getAmount();
			Date = entity.getDate();
			
			seller = new SellerDTO(entity.getSeller());
		}







		public Long getId() {
			return Id;
		}




		public void setId(Long id) {
			Id = id;
		}




		public Integer getVisited() {
			return visited;
		}




		public void setVisited(Integer visited) {
			this.visited = visited;
		}




		public Integer getDeals() {
			return deals;
		}




		public void setDeals(Integer deals) {
			this.deals = deals;
		}




		public Double getAmount() {
			return amount;
		}




		public void setAmount(Double amount) {
			this.amount = amount;
		}




		public LocalDate getDate() {
			return Date;
		}




		public void setDate(LocalDate date) {
			Date = date;
		}




		public SellerDTO getSeller() {
			return seller;
		}




		public void setSeller(SellerDTO seller) {
			this.seller = seller;
		}




		public static long getSerialversionuid() {
			return serialVersionUID;
		}

		
}
