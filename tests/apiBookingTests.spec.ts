import { request } from "@playwright/test";
import test, { expect } from "../base_fwk/fixtures/baseTest"

test.describe('API CRUD operations examples', () => {
  
  test("Post reqres=", async ({ request, page }) => {
    const createUser = await request.post("https://booking.com/api/users", {
      data: {
        "name": "adertest",
      },
    });
    console.log(await createUser.json());
  });

  test("Get reqres=", async ({ request }) => {
    const getUser = await request.get("https://booking.com/api/users/2",);
    console.log(await getUser.json());
  })

  test("Delete reqres=", async ({ request }) => {
    const deleteUser = await request.delete("https://booking.com/api/users/2");
    console.log(await deleteUser.status());
  })

  test("Update reqres", async ({ request }) => {
    const updateUser = await request.put("https://booking.com/api/users/2", {
      data: {
        "name": "bergmantest",
      }
    })
    console.log(await updateUser.json());
  })

});
