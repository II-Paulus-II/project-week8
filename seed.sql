/* 
I ran all three test queries on the one entry and vercel says "its failed" but it didn't. [2 inserts]
Then I ran the create table command again, and it said "succeeded",
so I then ran the two insert queries together and it said "failed". [2 more inserts]
Then I ran them individually and it "succeeded". [ 1 insert twice = 2 more inserts]

Now I have 6 test lines because all queries actually all succeeded 
*/

CREATE TABLE IF NOT EXISTS test (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL
);

INSERT INTO test (content) VALUES ('my test');
INSERT INTO test (content) VALUES ('my other test');

/* ----- Main Project Data ----- */

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category_id INTEGER NOT NULL REFERENCES categories(id)
);

INSERT INTO categories (name) VALUES ('Order of Tea'),('Order Ranks'),('Advice'),('Brands');

INSERT INTO articles (title, content, category_id) VALUES ('About the Order', 'The miilitary order of TEA was founded by Paulus in the year 1657AD and has grown exponentially since then. Paulus owes his unnaturally long life to his constant consumption of tea and welcomes all tea drinkers to be members of the order.', 1);