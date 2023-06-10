class ParkingSystem:

    def __init__(self, big: int, medium: int, small: int):
        self.x = [0,big,medium,small]

    def addCar(self, carType: int) -> bool:
        if self.x[carType] > 0:
            self.x[carType] = self.x[carType] - 1
            return True
        return False



park = ParkingSystem(1,2,3)
print(park.addCar(1))


