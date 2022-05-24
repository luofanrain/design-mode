// 工厂方法模式 

class Recruitment {
  obtain(){}
}

class ProjectDepartment{
  obtain(){
    console.log('项目部招了人')
  }
}

class CustomerDepartment{
  obtain(){
    console.log('客户部招了人')
  }
}


class RecruitmentFactory{
  createProjectRecruitment(){
    return new ProjectDepartment()
  }
  createCustomerRecruitment(){
    return new CustomerDepartment()
  }
}


function main(){
  let recruitment = new RecruitmentFactory()
  let projectRecruitment = recruitment.createProjectRecruitment()
  projectRecruitment.obtain()
  let recruitment1 = new RecruitmentFactory()
  let customerRecruitment = recruitment1.createCustomerRecruitment()
  customerRecruitment.obtain()
}

main()