class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.references :transactable, polymorphic: true, null: false
      t.decimal :amount, precision: 10, scale: 2, null: false
      t.datetime :transaction_date, null: false
      t.string :description, null: true, limit: 255

      t.timestamps
    end
  end
end
