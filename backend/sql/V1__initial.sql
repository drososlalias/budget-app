CREATE TABLE IF NOT EXISTS categories (
    id int not null auto_increment primary key,
    name varchar(50) not null,
    slug varchar(50) not null,
    total decimal(6,2) not null,
    max decimal(4) not null
);

CREATE TABLE IF NOT EXISTS expenses (
    id int not null auto_increment primary key,
    description varchar(150) not null,
    amount decimal(6,2) not null,
    category_id int not null,
    expense_date timestamp default current_timestamp(),
    foreign key(category_id) references categories(id) on update cascade on delete cascade
);

INSERT INTO categories(name,slug,total,max)
VALUES
    ("Wants", "wants", 0 , 500),
    ("Needs", "needs" , 0 , 300),
    ("Savings", "savings", 0 , 200);