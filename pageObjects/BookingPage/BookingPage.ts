// pageObjects/BookingPage.ts

import { Page } from 'playwright';
//import { test } from '@playwright/test';

export class BookingPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage() {
    await this.page.goto('https://www.booking.com');
  }

  async searchHotels(location: string, checkInDate: string, checkOutDate: string) {
    // Implement the logic to search for hotels
    await this.page.getByRole('button', { name: 'Accept' }).click();
    await this.page.getByPlaceholder('Where are you going?').click();
    await this.page.getByPlaceholder('Where are you going?').fill('new york');
    await this.page.getByRole('button', { name: 'New York New York State,' }).click();
    await this.page.getByLabel('18 December').click();
    await this.page.getByLabel('27 December').click();
    await this.page.getByTestId('occupancy-config').click();
    await this.page.locator('div').filter({ hasText: /^2$/ }).locator('button').first().click();
    await this.page.getByRole('button', { name: 'Done' }).click();
    await this.page.getByRole('button', { name: 'Search' }).click();
    await this.page.locator('button[aria-label="Dismiss sign in information."]').click;
   //await this.page.getByLabel('Dismiss sign in information.').click();
    //await this.page.getByTestId('date-display-field-end').click();
    //await this.page.getByText('GBPList your propertyRegisterSign inStaysFlightsFlight + HotelCar').click();
  }

  async selectFirstResult() {
    // Implement the logic to select the first hotel result
    //await this.page.getByLabel('Dismiss sign in information.').click();
    await this.page.goto('https://www.booking.com/hotel/us/hi-new-york-hostel-nyc.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AoXCl6sGwAIB0gIkMWQwNmYzNzItYzRjNi00MWMyLWI2MDktYmNmYzlmYzcyZWI42AIG4AIB&sid=d7345107d866cd4a2041c008c5ad60c1&all_sr_blocks=27021605_91470541_0_0_0;checkin=2023-12-18;checkout=2023-12-27;dest_id=20088325;dest_type=city;dist=0;group_adults=1;group_children=0;hapos=1;highlighted_blocks=27021605_91470541_0_0_0;hpos=1;matching_block_id=27021605_91470541_0_0_0;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;sr_pri_blocks=27021605_91470541_0_0_0__69930;srepoch=1701175759;srpvid=4ef759dce13e0266;type=total;ucfs=1&#hotelTmpl');
    await this.page.getByRole('row', { name: 'Bed in 8-Bed Women\'s' }).getByTestId('select-room-trigger').selectOption('1');
    await this.page.getByRole('button', { name: 'I\'ll reserve' }).click();
    //await this.page.getByLabel('First name\n *').click();
    //await this.page.getByLabel('First name\n *').press('CapsLock');
    await this.page.getByLabel('First name\n *').fill('aderwek');
    //await this.page.getByLabel('Last name\n *').click();
    //await this.page.getByLabel('Last name\n *').press('CapsLock');
    await this.page.getByLabel('Last name\n *').fill('boyinade');
    //await this.page.getByPlaceholder('Watch out for typos').click();
    //await this.page.getByPlaceholder('Watch out for typos').fill('sefty45@gmail.com');
    await this.page.locator('input#email').fill('sefty45@gmail.com');
    //await this.page.locator('.bui-u-hidden\\@small').click();
    //await this.page.getByPlaceholder('+').click();
    //await this.page.getByPlaceholder('+').fill('+447411258633');
    await this.page.locator('input#phone').fill('+447411258633');
    await this.page.getByText('I am the main guest').click();
    await this.page.getByLabel('Add your estimated arrival').selectOption('11');
    //await this.page.getByRole('button', { name: 'Next: Final details' }).click();
    await this.page.locator('span.bui-button__text.js-button__text').click();
    await this.page.getByLabel('Card type\n *').selectOption('Visa');
    //await this.page.locator('select#cc_type').selectOption('Visa'); 
    await this.page.getByLabel('Card number\n *').click();
    await this.page.getByLabel('Card number\n *').fill('4137 3514 2119 6069');
    await this.page.getByLabel('Card expiry date, enter year').selectOption('2025');
    await this.page.getByLabel('CVC-code\n *').click();
    await this.page.getByLabel('CVC-code\n *').fill('530');
    await this.page.locator('#book_credit_card div').filter({ hasText: 'CVC-code *' }).nth(1).click();
    await this.page.getByRole('button', { name: 'Complete booking' }).click();
  }

  async getHotelBookingConfirmation() {
    // Implement the logic to get the hotel booking confrimation
   await this.page.goto('https://secure.booking.com/confirmation.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AoXCl6sGwAIB0gIkMWQwNmYzNzItYzRjNi00MWMyLWI2MDktYmNmYzlmYzcyZWI42AIG4AIB&sid=d7345107d866cd4a2041c008c5ad60c1&auth_key=v642ihDxeELawN2q&bp_travel_purpose=leisure&hostname=www.booking.com&pre_price=699.3&rt_num_blocks=6&source=book&srpvid=4ef759dce13e0266&ua_created=0&');
   await this.page.getByLabel('Close dialog').click();
   await this.page.getByRole('heading', { name: 'Your booking in New York is' }).click();
  }
}
