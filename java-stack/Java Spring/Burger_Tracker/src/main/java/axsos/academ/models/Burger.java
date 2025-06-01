package axsos.academ.models;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;
@Entity
@Table(name="burger")
public class Burger {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    @NotNull
	    @Size(min = 1, max = 200, message="Burger name must be at least 1 characters.")
	    private String burgername;
	    @NotNull
	    @Size(min = 1, max = 200, message="Restaurant name must be at least 1 characters.")
	    private String restaurantname;
	    @NotNull
	    @Size(min = 5, max = 200, message="note must be at least 5 characters.")
	    private String note;
	    @NotNull
	    @Max(value = 5, message="Rating need to be between 0-5 ")
	    private Integer rating;
	    // This will not allow the createdAt column to be updated after creation
	    @Column(updatable=false)
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date createdAt;
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date updatedAt;
	    
	    public Burger(String burgername, String restaurantname, int rating, String note) {
	        this.burgername = burgername;
	        this.restaurantname = restaurantname;
	        this.rating = rating;
	        this.note = note;
	    }
		@PrePersist
	    protected void onCreate(){
	        this.createdAt = new Date();
	    }
	    @PreUpdate
	    protected void onUpdate(){
	        this.updatedAt = new Date();
	    }
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getBurgername() {
			return burgername;
		}
		public void setBurgername(String burgername) {
			this.burgername = burgername;
		}
		public String getRestaurantname() {
			return restaurantname;
		}
		public void setRestaurantname(String restaurantname) {
			this.restaurantname = restaurantname;
		}
		public Integer getRating() {
			return rating;
		}
		public void setRating(Integer rating) {
			this.rating = rating;
		}
	    public String getNote() {
			return note;
		}
		public void setNote(String note) {
			this.note = note;
		}
		public Date getCreatedAt() {
			return createdAt;
		}
		public void setCreatedAt(Date createdAt) {
			this.createdAt = createdAt;
		}
		public Date getUpdatedAt() {
			return updatedAt;
		}
		public void setUpdatedAt(Date updatedAt) {
			this.updatedAt = updatedAt;
		}
	    
	    
}
