class CreatePlaces < ActiveRecord::Migration[5.1]
  def change
    create_table :places do |t|
      t.references :city, foreign_key: true
      t.string :place
      t.string :date
      t.text :desc

      t.timestamps
    end
  end
end
