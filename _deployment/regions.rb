# frozen_string_literal: true

require 'yaml'
require 'fileutils'

data_dir = '../_data'

sections = YAML.load_file("#{data_dir}/sections.yml")
regions = YAML.load_file("#{data_dir}/regions.yml")

# Region loop
regions.each do |region|

  dest_dir = "/tmp/#{region['id']}"
  unless File.exist?(dest_dir)
    Dir.mkdir(dest_dir) unless File.exist?(dest_dir)
    files = Dir.glob('../*').reject { |file| file.end_with?('../.') }
    FileUtils.cp_r(files, dest_dir)
  end

  # Category loop
  sections.each do |section|
    data = YAML.load_file("#{data_dir}/#{section['id']}.yml")
    websites = data['websites']
    section_array = []

    # Website loop
    websites.each do |website|

      if website['regions'].nil?
        section_array.push(website)
      else
        section_array.push(website) if website['regions'].include?(region['id'].to_s)
      end

    end
    website_array = {websites: section_array}
    website_yaml = website_array.to_yaml.gsub("---\n:", '')

    File.open("#{dest_dir}/_data/#{section['id']}.yml", 'w') do |file|
      file.write website_yaml
    end

  end

  out_dir = "#{Dir.pwd}/../#{region['id']}"
  puts "Building #{region['id']}..."
  puts `cd #{dest_dir} && bundle exec jekyll build -d #{out_dir} --config _config-regions.yml` # Add -V for debugging
  puts `cd #{out_dir} && rm -R -- */` # Delete Subdirectories
  puts "#{region['id']} built!"
end
