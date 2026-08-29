START TRANSACTION;

INSERT INTO users (id, username, password, email, phone_number) VALUES
    (1, 'user', '$2b$12$JxVZuuBLIH8Ah8ClLd1Y9eworjGSZHiCrszh9tLB2hZivgviq4kia', 'user@example.com', '+10000000001'),
    (2, 'bob_johnson', '$2b$12$JxVZuuBLIH8Ah8ClLd1Y9eworjGSZHiCrszh9tLB2hZivgviq4kia', 'bob.johnson@example.com', '+10000000002'),
    (3, 'carol_williams', '$2b$12$JxVZuuBLIH8Ah8ClLd1Y9eworjGSZHiCrszh9tLB2hZivgviq4kia', 'carol.williams@example.com', '+10000000003'),
    (4, 'david_brown', '$2b$12$JxVZuuBLIH8Ah8ClLd1Y9eworjGSZHiCrszh9tLB2hZivgviq4kia', 'david.brown@example.com', '+10000000004'),
    (5, 'emma_davis', '$2b$12$JxVZuuBLIH8Ah8ClLd1Y9eworjGSZHiCrszh9tLB2hZivgviq4kia', 'emma.davis@example.com', '+10000000005'),
    (6, 'frank_miller', '$2b$12$JxVZuuBLIH8Ah8ClLd1Y9eworjGSZHiCrszh9tLB2hZivgviq4kia', 'frank.miller@example.com', '+10000000006'),
    (7, 'grace_wilson', '$2b$12$JxVZuuBLIH8Ah8ClLd1Y9eworjGSZHiCrszh9tLB2hZivgviq4kia', 'grace.wilson@example.com', '+10000000007'),
    (8, 'henry_moore', '$2b$12$JxVZuuBLIH8Ah8ClLd1Y9eworjGSZHiCrszh9tLB2hZivgviq4kia', 'henry.moore@example.com', '+10000000008'),
    (9, 'isabella_taylor', '$2b$12$JxVZuuBLIH8Ah8ClLd1Y9eworjGSZHiCrszh9tLB2hZivgviq4kia', 'isabella.taylor@example.com', '+10000000009'),
    (10, 'jack_anderson', '$2b$12$JxVZuuBLIH8Ah8ClLd1Y9eworjGSZHiCrszh9tLB2hZivgviq4kia', 'jack.anderson@example.com', '+10000000010');

COMMIT;