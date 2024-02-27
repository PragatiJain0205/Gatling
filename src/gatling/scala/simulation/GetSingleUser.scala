package simulation

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetSingleUser extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://reqres.in/api/users")
  private val scn = scenario("Get_single_User")
    .exec(getSingleUser())
    .pause(1)

  def getSingleUser() = {
    http("Get Single User")
      .get("/2")
      .check(
        status.is(200),
        jsonPath("$.data.first_name").is("Janet"))

  }

  setUp(
    scn.inject(rampUsers(10).during(20)).protocols(httpProtocol)
  )
}
