/************************************
   조인 실습 - 2
*************************************/

-- 고객명 Antonio Moreno이 1997년에 주문한 주문 정보를 주문 아이디, 주문일자, 배송일자, 배송 주소를 고객 주소와 함께 구할것.  
select * from customers c where contact_name = 'Antonio Moreno';
select * from orders where customer_id = 'ANTON';

select
	c.customer_id,
	c.address,
	o.order_id,
	o.order_date,
	o.shipped_date,
	o.ship_address
from 
	orders o
	join customers c on o.customer_id = c.customer_id
where
	c.contact_name = 'Antonio Moreno'
and
	o.shipped_date between to_date('1997-01-01', 'yyyy-MM-dd') and to_date('1997-12-31', 'yyyy-MM-dd')
order by 
	order_id;


-- Berlin에 살고 있는 고객이 주문한 주문 정보를 구할것
-- 고객명, 주문id, 주문일자, 주문접수 직원명, 배송업체명을 구할것.
select
	c.contact_name,
	o.order_id,
	o.order_date,
	e.first_name||' '|| e.last_name as employee_name,
	s.company_name 
from 
	customers c 
	join orders o on c.customer_id = o.customer_id 
	join employees e on o.employee_id = e.employee_id 
	join shippers s on o.ship_via = s.shipper_id
where 
	c.city = 'Berlin'
order by
	o.order_id ;


--Beverages 카테고리에 속하는 모든 상품아이디와 상품명, 그리고 이들 상품을 제공하는 supplier 회사명 정보 구할것 
select
	p.product_id,
	p.product_name,
	s.company_name 
from
	products p 
	join categories c on p.category_id  = c.category_id 
	join suppliers s on p.supplier_id = s.supplier_id 
where
	c.category_name = 'Beverages'
order by
	product_id;


-- 고객명 Antonio Moreno이 1997년에 주문한 주문 상품정보를 고객 주소, 주문 아이디, 주문일자, 배송일자, 배송 주소 및
-- 주문 상품아이디, 주문 상품명, 주문 상품별 금액, 주문 상품이 속한 카테고리명, supplier명을 구할 것. 

select
	c.address,
	c.customer_id,
	o.order_date,
	o.shipped_date,
	oi.product_id,
	p.product_name,
	oi.unit_price,
	c2.category_name,
	s.contact_name
from
	orders o 
	join customers c on o.customer_id = c.customer_id 
	join order_items oi on o.order_id = oi.order_id
	join products p on p.product_id = oi.product_id 
	join categories c2 on c2.category_id = p.category_id
	join suppliers s on s.supplier_id = p.supplier_id
where
	c.contact_name = 'Antonio Moreno'
and
	o.order_date between to_date('1997-01-01', 'yyyy-MM-dd') and to_date('1997-12-31', 'yyyy-MM-dd') 
order by 
	o.order_id ;


