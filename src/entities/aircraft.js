export default class Aircraft {

  constructor(aircraftEntity) {
    try {
      if (!aircraftEntity.name) throw "Name is required"
      if (!aircraftEntity.model_id) throw "Model ID is required"
      if (!aircraftEntity.organization_id) throw "Organization ID is required"
      if (!aircraftEntity.serial) throw "Serial is required"

      if (aircraftEntity.id && !aircraftEntity.id.match(/^[A-Za-z0-9]*$/)) throw "Only alphabetic and numeric are allowed"
      if (!aircraftEntity.model_id.match(/^[A-Za-z0-9]*$/)) throw "Only alphabetic and numeric are allowed"
      if (!aircraftEntity.organization_id.match(/^[A-Za-z0-9]*$/)) throw "Only alphabetic and numeric are allowed"
      if (aircraftEntity.color && !aircraftEntity.color.match(/^#[A-Za-z0-9]*$/)) throw "Color code must be started '#' "

      if (aircraftEntity.is_customized && aircraftEntity.is_customized != 0 && aircraftEntity.is_customized != 1) throw "Customize flag must be 0 or 1"
    } catch (e) {
      console.error(e)
    }

    this.id = aircraftEntity.id
    this.name = aircraftEntity.name
    this.description = aircraftEntity.description
    this.model_id = aircraftEntity.model_id
    this.organization_id = aircraftEntity.organization_id
    this.is_customized = aircraftEntity.is_customized ? aircraftEntity.is_customized : 0
    this.serial = aircraftEntity.serial
    this.color = aircraftEntity.color
  }

}