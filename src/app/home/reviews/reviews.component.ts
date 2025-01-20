import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {
  reviews = [
    {
      shortReview: 'Amazing atmosphere!',
      fullReview:
        'I had a wonderful experience here. The ambiance is cozy and welcoming, and the staff went above and beyond to make sure we were comfortable. Highly recommend to anyone looking for a relaxing spot.',
      name: 'Emily Watson',
      location: 'Toronto, ON',
      date: '2025-01-15',
      rating: 5,
      image: 'https://example.com/images/emily_watson.jpg',
    },
    {
      shortReview: 'Great customer service!',
      fullReview:
        'The team was incredibly attentive and friendly. They made me feel valued as a customer and even provided recommendations that turned out to be spot-on. A delightful experience overall!',
      name: 'James Smith',
      location: 'Brampton, ON',
      date: '2025-01-12',
      rating: 5,
      image: 'https://example.com/images/james_smith.jpg',
    },
    {
      shortReview: 'Delicious food options!',
      fullReview:
        'Every dish I tried was flavorful and perfectly cooked. They clearly take pride in their menu, and the quality is exceptional. The dessert selection is a must-try!',
      name: 'Sophia Chen',
      location: 'Mississauga, ON',
      date: '2025-01-10',
      rating: 5,
      image: 'https://example.com/images/sophia_chen.jpg',
    },
    {
      shortReview: 'Cozy and clean.',
      fullReview:
        "The place is spotless, and the atmosphere is very inviting. It's evident that a lot of care is put into maintaining a high standard of cleanliness and comfort. Perfect for a quiet day out.",
      name: 'Michael Brown',
      location: 'Vancouver, BC',
      date: '2025-01-08',
      rating: 4,
      image: 'https://example.com/images/michael_brown.jpg',
    },
    {
      shortReview: 'Reasonable prices.',
      fullReview:
        'I was pleasantly surprised by how affordable everything was, especially given the high quality of the food and service. Definitely worth every penny!',
      name: 'Olivia Johnson',
      location: 'Calgary, AB',
      date: '2025-01-06',
      rating: 5,
      image: 'https://example.com/images/olivia_johnson.jpg',
    },
    {
      shortReview: 'Perfect for families.',
      fullReview:
        'Our entire family enjoyed the visit. There’s something for everyone here, and the kids absolutely loved the playful yet organized environment. We’ll be back soon!',
      name: 'David Lee',
      location: 'Edmonton, AB',
      date: '2025-01-04',
      rating: 5,
      image: 'https://example.com/images/david_lee.jpg',
    },
    {
      shortReview: 'Quick service!',
      fullReview:
        'Despite being crowded, the staff managed everything efficiently. Our orders arrived quickly, and everything was spot-on. A great choice for a busy day.',
      name: 'Jessica Wilson',
      location: 'Winnipeg, MB',
      date: '2025-01-02',
      rating: 4,
      image: 'https://example.com/images/jessica_wilson.jpg',
    },
    {
      shortReview: 'Lovely decor.',
      fullReview:
        'The decor here is absolutely stunning. It creates such a relaxing and picturesque environment. Perfect for both casual visits and special occasions.',
      name: 'Daniel Martinez',
      location: 'Montreal, QC',
      date: '2025-01-01',
      rating: 5,
      image: 'https://example.com/images/daniel_martinez.jpg',
    },
  ];

  currentSlide = 0;

  prevSlide() {
    this.currentSlide =
      this.currentSlide > 0 ? this.currentSlide - 1 : this.reviews.length - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide < this.reviews.length - 1 ? this.currentSlide + 1 : 0;
  }
}
