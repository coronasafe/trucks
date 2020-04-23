class CreateNonMedicalReqs < ActiveRecord::Migration[6.0]
  def change
    create_table :non_medical_reqs do |t|
      t.belongs_to :contact, null: false, foreign_key: true
      t.boolean :need_food
      t.boolean :fullfilled

      t.timestamps
    end
  end
end
