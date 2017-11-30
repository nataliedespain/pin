class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.references :user, foreign_key: true
      t.string :city
      t.string :start_date
      t.string :end_date

      t.timestamps
    end
  end
end
