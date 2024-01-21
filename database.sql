
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    team_id INTEGER,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_role_id INTEGER,
    FOREIGN KEY (team_id) REFERENCES Teams (team_id),
    FOREIGN KEY (user_role_id) REFERENCES User_Roles (user_role_id)
);

CREATE TABLE Tasks (
    task_id SERIAL PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_description TEXT,
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER,
    category_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES Users (user_id),
    FOREIGN KEY (category_id) REFERENCES Task_Categories (category_id)
);

CREATE TABLE Task_Categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    category_description TEXT
);


CREATE TABLE Teams (
    team_id SERIAL PRIMARY KEY,
    team_name VARCHAR(255) NOT NULL
);


CREATE TABLE User_Roles (
    user_role_id SERIAL PRIMARY KEY,
    user_role_name VARCHAR(255) NOT NULL
);

CREATE TABLE Pomodoro_Cycles (
    pomodoro_id SERIAL PRIMARY KEY,
    task_id INTEGER,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    FOREIGN KEY (task_id) REFERENCES Tasks (task_id)
);
