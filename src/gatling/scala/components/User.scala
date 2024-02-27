package components

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object User {

  private val userBody= """{"name": "${name}","job": "${job}"}"""


  def getUserList()={
    http("GET_USER_LIST")
      .get("api/users")
//      .body(StringBody(userBody))
      .check(
        jsonPath("$.data[*].email").findAll.saveAs("emailList")
      )


      .check(
        status.is(200))


  }

  def deleteUser()={
    http("DELETE_USER")
      .delete("/2")
      .check(
        status.is(204))
  }
}
