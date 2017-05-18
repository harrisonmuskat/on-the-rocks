require 'rails_helper'

feature "user visits main page and signs up" do
  scenario "sees Sign In button from main page" do
    visit root_path

    expect(page).to have_link("Sign In")
    expect(page).to have_content("On the Rocks")
  end

  scenario "user clicks Sign In button and sees fields to sign in" do
    visit root_path

    expect(page).to have_content("Email address")
    expect(page).to have_content("Password")
  end
end
