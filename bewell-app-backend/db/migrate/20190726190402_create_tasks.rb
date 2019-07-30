class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title
      t.date :date
      t.text :description
      t.boolean :completed
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
