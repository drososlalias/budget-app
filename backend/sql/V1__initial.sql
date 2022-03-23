CREATE TABLE IF NOT EXISTS categories (
    id int not null auto_increment primary key,
    name varchar(50) not null,
    max int not null,
    slug varchar(50) not null
);

CREATE TABLE IF NOT EXISTS expenses (
    id int not null auto_increment primary key,
    description varchar(150) not null,
    amount decimal(6,2) not null,
    category_id int not null,
    expense_date timestamp default current_timestamp(),
    foreign key(category_id) references categories(id) on update cascade on delete cascade
);

-- put any value you want in ? when migrating 
INSERT INTO categories(name,max,slug)
VALUES
    ("Wants", ?, "wants"),
    ("Needs", ?, "needs"),
    ("Savings", ?, "savings");