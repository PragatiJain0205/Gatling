package simulation

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class MySimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("http://yourwebsite.com") // Set your base URL here

  val scn = scenario("MyScenario")
    .exec(http("request_1")
      .get("/"))

  setUp(
    scn.inject(atOnceUsers(1)) // Adjust the number of users and other injection profiles as needed
  ).protocols(httpProtocol)
}
