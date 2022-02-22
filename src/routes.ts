import { Router } from "express";
import { CreateDeveloperController } from "./modules/developers/createDeveloper/createDeveloperController";
import { CreateLevelController } from "./modules/levels/createLevel/createlevelController";
import { DeleteLevelController } from "./modules/levels/deleteLevel/deleteLevelController";
import { UpdateLevelController } from "./modules/levels/updateLevel/updateLevelController"
import { ListLevelController } from "./modules/levels/listLevel/listLevelController"
import { GetLevelController  } from "./modules/levels/getLevel/getLevelController"
import { DeleteDeveloperController } from "./modules/developers/deleteDeveloper/deleteLevelController";
import { UpdateDeveloperController } from "./modules/developers/updateDeveloper/updateDeveloperController"
import { GetDeveloperController } from "./modules/developers/getDeveloper/getDeveloperController"
import { ListDeveloperController } from "./modules/developers/listDeveloper/listDeveloperController"


const routes = Router()



//developers
const createDeveloperController = new CreateDeveloperController()
const deleteDeveloperController = new DeleteDeveloperController()
const updateDeveloperController = new UpdateDeveloperController()
const getDeveloperController = new GetDeveloperController()
const listDeveloperController = new ListDeveloperController()
routes.post("/developer/", createDeveloperController.handle)
routes.delete("/developer", deleteDeveloperController.handle)
routes.put("/developer", updateDeveloperController.handle)
routes.get("/developer/:id", getDeveloperController.handle)
routes.get("/developer", listDeveloperController.handle)


//levels
const createLevelController =  new CreateLevelController()
const deleteLevelController = new DeleteLevelController()
const updateLevelController = new UpdateLevelController()
const listLevelController = new ListLevelController()
const getLevelController = new GetLevelController()
routes.post("/level/", createLevelController.handle)
routes.delete("/level/", deleteLevelController.handle)
routes.put("/level/", updateLevelController.handle)
routes.get("/levels/", listLevelController.handle)
routes.get("/level/:id", getLevelController.handle)








export { routes }