-- 1. Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.

SELECT * FROM bank.client where LENGTH (FirstName) < 6;

-- 2. Вибрати львівські відділення банку.

SELECT * FROM bank.department  WHERE DepartmentCity LIKE 'LVIV';

-- 3. Вибрати клієнтів з вищою освітою та посортувати по прізвищу.

SELECT * FROM bank.client WHERE Education = 'HIGH' ORDER BY LastName ;

-- 4. Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.

SELECT * FROM bank.client WHERE Education LIKE 'HIGH' ORDER BY idClient desc limit 5 ;

-- 5. Вивести усіх клієнтів, чиє прізвище закінчується на 'IV' чи 'IVA'.

SELECT * FROM bank.client where LastName like '%IV'or LastName like '%IVA';

-- 6. Вивести клієнтів банку, які обслуговуються київськими відділеннями.

select * from bank.client join bank.department on client.idDepartment=idDepartment
where department.DepartmentCity = 'Kyiv';

-- 7. Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.

select FirstName,Passport from bank.client order by FirstName ;

-- 8. Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.

select * from bank.client,bank.application where CreditState = 'not returned' and Currency = 'Gryvnia' and sum > 5000;

-- 9. Порахувати кількість клієнтів усіх відділень та лише львівських відділень.

select count(idClient) from bank.client join bank.department 
on client.idDepartment = department.idDepartment 
union select count(idClient) from bank.client join bank.department 
on client.idDepartment = department.idDepartment 
where DepartmentCity = 'Lviv';

-- 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.

select idClient,LastName,sum(Sum) from client join application 
on client.idClient = application.Client_idClient
group by idClient;

-- 11. Визначити кількість заявок на кредит для кожного клієнта.

select count(idApplication),firstName,lastName from client join application
on idClient = application.Client_idClient
group by idClient;

-- 12. Визначити найбільший та найменший кредити.

select max(Sum),min(Sum) from bank.application;

-- 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.

select count(application.idApplication),FirstName,LastName,Education from client join application
on idClient = Client_idClient
where Education = 'high'
group by idClient;

-- 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.

select avg(Sum) as avg, FirstName,LastName from bank.client join bank.application
on idClient = Client_idClient
group by idClient
order by avg desc
limit 1 ;

-- 15. Вивести відділення, яке видало в кредити найбільше грошей

select sum(Sum) as summ,DepartmentCity
from department join client c on department.idDepartment = c.idDepartment
join application a on c.idClient = a.Client_idClient
group by department.idDepartment
order by summ desc
limit 1; 

-- 16. Вивести відділення, яке видало найбільший кредит.

select Sum,DepartmentCity
from bank.department join client c on department.idDepartment = c.idDepartment
join application a on c.idClient = a.Client_idClient
order by Sum desc limit 1;


-- 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.

update bank.client join application a on client.idClient = a.Client_idClient
set sum = 6000
where Education = 'high';

-- 18. Усіх клієнтів київських відділень пересилити до Києва.

update client join department d on d.idDepartment = client.idDepartment
set city = 'Kyiv'
where departmentCity = 'Kyiv';

-- 19. Видалити усі кредити, які є повернені.

delete  from bank.application where CreditState = 'Returned';


-- 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete application from application join client c on c.idClient = application.Client_idClient
where substr(LastName,2,1) in ('a','e','i','o','u','y');


-- 21. Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select sum(Sum) as sum,DepartmentCity from client join department 
on department.idDepartment = client.idDepartment
join application on application.Client_idClient = client.idClient
where DepartmentCity = 'Lviv' and sum > 5000
group by client.idDepartment;





-- 22. Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000

select FirstName,LastName,Sum from client join application a on client.idClient = a.Client_idClient
where Sum > 5000 and  CreditState = 'Returned';



/* Знайти максимальний неповернений кредит.*/

select max(Sum) from application where CreditState = 'Not Returned';


/*Знайти клієнта, сума кредиту якого найменша*/

select sum(Sum) as sum,FirstName,LastName,idClient from client join application a on client.idClient = a.Client_idClient
group by idClient
order by sum limit 1;


/*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/

select * from application where Sum>(select avg(Sum) from application);

/*Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/

select FirstName,LastName,city from client where City like (select city from client join application a on client.idClient = a.Client_idClient
    group by idClient order by count(Sum) desc limit 1);

#місто чувака який набрав найбільше кредитів

select city from client join application a on client.idClient = a.Client_idClient
    group by idClient order by count(Sum) desc limit 1


