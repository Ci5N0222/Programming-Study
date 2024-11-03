/************************************
   조인 실습 - 1
*************************************/

-- 직원 정보와 직원이 속한 부서명을 가져오기
select
	e.*,
	d.*
from hr.emp e 
	join hr.dept d on e.deptno = d.deptno;

-- job이 SALESMAN인 직원정보와 직원이 속한 부서명을 가져오기. 
select 
	e.*,
	d.dname
from 
	emp e
	join dept d on e.deptno = d.deptno
where 
	e.job = 'SALESMAN';
	
-- 부서명 SALES와 RESEARCH의 소속 직원들의 부서명, 직원번호, 직원명, JOB 그리고 과거 급여 정보 추출 
select 
	d.dname as 부서명,
	e.empno as 직원번호,
	e.ename,
	e.job,
	esh.sal 
from 
	emp e 
	join dept d on e.deptno = d.deptno
	join emp_salary_hist esh on e.empno = esh.empno
where
	d.dname in ('SALES', 'RESEARCH');

-- 부서명 SALES와 RESEARCH의 소속 직원들의 부서명, 직원번호, 직원명, 
-- JOB 그리고 과거 급여 정보중 1983년 이전 데이터는 무시하고 데이터 추출 
select 
	d.dname as 부서명,
	e.empno as 직원번호,
	e.ename,
	e.job,
	esh.sal,
	esh.fromdate 
from 
	emp e 
	join dept d on e.deptno = d.deptno
	join emp_salary_hist esh on e.empno = esh.empno
where
	d.dname in ('SALES', 'RESEARCH')
and
	esh.fromdate >= to_date('19830101', 'yyyyMMdd') 
order by 1, 2, 3, esh.fromdate;

-- 부서명 SALES와 RESEARCH 소속 직원별로 과거부터 현재까지 모든 급여를 취합한 평균 급여 
with
	temp_01 as 
	(
		select 
			d.dname,
			e.empno,
			e.ename,
			e.job,
			esh.fromdate,
			esh.todate,
			esh.sal 
		from
			hr.dept d 
			join emp e on e.deptno = d.deptno 
			join emp_salary_hist esh on esh.empno = e.empno
		where 
			d.dname in ('SALES', 'RESEARCH')
		order by
			d.dname, e.empno, esh.fromdate
	)
select 
	empno,
	max(ename) as ename, 
	avg(sal) as avg_sal
from
	temp_01
group by
	empno
	

-- 직원명 SMITH의 과거 소속 부서 정보를 구할 것. 	
select 
	*
from 
	emp e  
	join emp_dept_hist edh on e.empno = edh.empno
	join dept d on edh.deptno = d.deptno
where 
	ename = 'SMITH';
	
