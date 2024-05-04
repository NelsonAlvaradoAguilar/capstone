Table users {
id integer [primary key]
name varchar
lastname varchar
country varchar
email varchar
password varchar
profile_image varchar
background_profile_image varchar
created_at timestamp
}

Table Events {
id integer [Primary Key]
user_id integer
title varchar
description varchar
location varchar
entrance varchar
price money
date varchar
image image
created_at timestamp
}

Table Events_comments {
id integer [primary key]
event_id integer
user_id integer
comment varchar
created_at timestamp
}

Table articles_news {
id integer [Primary Key]
user_id integer
title varchar
description varchar
location varchar
status varchar
image image
contact_name varchar
email varchar
phone varchar
created_at timestamp

}
Table classes {
id integer [Primary Key]
user_id integer
title varchar
description varchar
date varchar
location varchar
instructor varchar
images image
created_at timestamp

}
Table register {
id integer [Primary Key]
class_id integer
user_id integer
created_at timestamp

}
Table classRatings {
id integer [Primary Key]
class_id integer
rating integer
created_at timestamp

}
