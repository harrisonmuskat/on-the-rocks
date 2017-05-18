require 'rails_helper'

feature "user visits main page" do
  scenario "sees and clicks on Sign In button from main page" do
    visit root_path

    expect(page).to have_link("Sign In")
    expect(page).to have_content("On the Rocks")
  end
end
