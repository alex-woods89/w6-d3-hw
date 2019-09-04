const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
   const journeys = this.journeys.map(function(journey){
     return journey.startLocation
   })
   return journeys
};

Traveller.prototype.getJourneyEndLocations = function () {
 const journeys = this.journeys.map(function(journey){
   return journey.endLocation
 })
 return journeys
};

Traveller.prototype.getJourneysByTransport = function (transport) {
 const foundJourneys = this.journeys.filter(journey => {
   return journey.transport === transport
 })
 return foundJourneys
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const foundJourneys = this.journeys.filter(journey => {
    return journey.distance >= minDistance
  })
  return foundJourneys
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const dupeArray = this.journeys.map(function(journey){
    return journey.transport
  })
  const distinct = (value, index, self) => {
    return self.indexOf(value) === index
  }
     const uniqueArray = dupeArray.filter(distinct)
     return uniqueArray
};


module.exports = Traveller;
