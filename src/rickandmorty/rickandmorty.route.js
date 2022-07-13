const router = require("express").Router();

const characterController = require("./rickandmorty.controller");
const authMiddleware = require("../auth/auth.middleware");

router.get("/", authMiddleware, characterController.findAllCharactersController);
router.get("/find/:id", authMiddleware, characterController.findOneCharacterController);
router.post("/create", authMiddleware, characterController.createCharacterController);
router.put("/update/:id", authMiddleware, characterController.updateCharacterController);
router.delete("/delete/:id", authMiddleware, characterController.deleteCharacterController);
router.get("/search",authMiddleware, characterController.searchCharacterController);

module.exports = router;