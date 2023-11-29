// tests/bookingTest.spec.ts

import { test, expect } from '@playwright/test';
import { BookingPage } from '../pageObjects/BookingPage/BookingPage.ts';  

test('Book a hotel on booking.com', async ({ page }) => {
  const bookingPage = new BookingPage(page);

  // Test Steps
  await bookingPage.navigateToHomePage();
  await bookingPage.searchHotels('new york', '2023-12-18', '2023-12-27');
  await bookingPage.selectFirstResult();
  await bookingPage.getHotelBookingPayment();

  // Assertion
  const hotelName = await bookingPage.getHotelBookingConfirmation();
  expect(hotelName).toBeTruthy();
});
