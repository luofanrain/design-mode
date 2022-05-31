// 抽象工厂模式  提供一个创建一系列相关或相互依赖对象的接口，而不需指定他们具体的类

abstract class Table{
  insert(){}
  delete(){}
  update(){}
  select(){}
}

abstract class Database {
  tableList:TableList = []
  loadTable(tableName:string){
    return new (this.tableList[tableName])();
  }
}

class SqlServerDB extends Database {
  tableList:TableList = {User:SqlServerUser,Department:SqlServerDepartment}
  constructor(){
    super()
    console.log('连接了sqlserver数据库')
  }
}
interface TableList {
  [key:string]:any
}
class MysqlDb extends Database {
  tableList:TableList = {User:MysqlUser,Department:MysqlDepartment}
  constructor(){
    super()
    console.log('连接了mysql数据库')
  }
}

interface DbList {
  [key:string]:any
}
class DatabaseFactory{
  static dbList:DbList = {SqlServer:SqlServerDB,Mysql:MysqlDb}
  static loadDb(dbName:string){
    return new (this.dbList[dbName])()
  }
}

class SqlServerUser extends Table{
  constructor(){
    super()
  }
  insert(){
    console.log('SqlServer  insert了用户数据')
  }
  delete(){
    console.log('SqlServer  delete了用户数据')
  }
  update(){
    console.log('SqlServer  update了用户数据')
  }
  select(){
    console.log('SqlServer  select了用户数据')
  }
}
class SqlServerDepartment extends Table{
  insert(){
    console.log('SqlServer  insert了用户数据')
  }
  delete(){
    console.log('SqlServer  delete了用户数据')
  }
  update(){
    console.log('SqlServer  update了用户数据')
  }
  select(){
    console.log('SqlServer  select了用户数据')
  }
}
class MysqlUser extends Table{
  insert(){
    console.log('mysql insert了部门数据')
  }
  delete(){
    console.log('mysql delete了部门数据')
  }
  update(){
    console.log('mysql update了部门数据')
  }
  select(){
    console.log('mysql select了部门数据')
  }
}
class MysqlDepartment extends Table{
  insert(){
    console.log('mysql insert了部门数据')
  }
  delete(){
    console.log('mysql delete了部门数据')
  }
  update(){
    console.log('mysql update了部门数据')
  }
  select(){
    console.log('mysql select了部门数据')
  }
}



function main(){
  let db:Database = DatabaseFactory.loadDb('Mysql')
  let user = db.loadTable('User')
  user.insert()
  user.select()
  user.update()
  user.delete()
  let department = db.loadTable('Department')
  department.insert()
  department.select()
  department.update()
  department.delete()

  let db1:Database = DatabaseFactory.loadDb('SqlServer')
  let user1 = db1.loadTable('User')
  user1.insert()
  user1.select()
  user1.update()
  user1.delete()
  let department1 = db1.loadTable('Department')
  department1.insert()
  department1.select()
  department1.update()
  department1.delete()
}


main()