package simulation

import components.User.getUserList
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class GetListofUsers extends Simulation{

  private val httpProtocol = http
    .baseUrl("https://reqres.in/")

  private val userFeeder = csv("feeders/user-data.csv").circular


  private val scn =scenario("Get_User_List")
    .pause(1)
//    .feed(userFeeder)
//    .exec{
//      session => println("Name: " +session("name").as[String])
//      println("Job: " +session("job").as[String])
//        session
//    }
    .exec(getUserList())
    .exec{session => println("Email List : " + session("emailList").as[String].split(',').map(_.trim).toList.drop(1).dropRight(1))
    session}
    .pause(1)
    .pause(1)

  setUp(
    scn.inject(constantConcurrentUsers(100).during(10 second)).protocols(httpProtocol)
  )
}
