package simulation
import components.User.deleteUser
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class DeleteUser  extends Simulation{

 private val httpProtocol = http
    .baseUrl("https://reqres.in/api/users")



  private val scn=scenario("Delete_User")
    .exec(deleteUser())
    .pause(1)

  setUp(scn.inject(atOnceUsers(10)).protocols(httpProtocol))



}
