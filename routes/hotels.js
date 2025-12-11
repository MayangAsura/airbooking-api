import express from 'express'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel, getHotelRooms, countByType, countByCity } from '../controller/hotel.js'
import { verifyAdmin } from '../util/verifyToken.js'

const router = express.Router()

router.post('/create', createHotel)
router.get('/', getHotels)
router.get('/countByType', countByType)
router.get('/countByCity', countByCity)
router.get('/rooms/:id', getHotelRooms)
router.patch('/update/:id', verifyAdmin, updateHotel)

router.get('/:id', getHotel)

router.delete('/delete/:id', verifyAdmin, deleteHotel)
// router.post('/', (req, res) => {
//     res.json({error : false, message: 'Create'})
// })

export default router

