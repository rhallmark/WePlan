"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
let EventRepositoryService = class EventRepositoryService {
    constructor(http) {
        this.http = http;
        this._apiUrl = 'app/events';
        this._restUrl = '10.0.0.0';
    }
    getRest() {
        return this.http.get(`${this._restUrl}:8000/api/restaurants`)
            .toPromise()
            .then(response => response.json().data);
    }
    list() {
        return this.http.get(this._apiUrl)
            .toPromise()
            .then(response => response.json().data);
    }
    //This should get an Event based upon an id
    getEvent(id) {
        var pluck = (response) => (response && response.length) ? response[0] : undefined;
        return this.http.get(`${this._apiUrl}/?id=${id}`)
            .toPromise()
            .then((response) => pluck(response.json().data))
            .catch((response) => alert(response.json().error));
    }
    add(l_event) {
        //posting json data? how does this work as posting a event object?
        return this.http.post(this._apiUrl, l_event)
            .toPromise()
            .then(() => l_event)
            .catch(response => alert(response.json().error));
    }
    update(l_event) {
        // Spent four hours debugging the fact that 'id' is a key word
        // EventID could not be used. ?
        return this.http.put(`${this._apiUrl}/${l_event.id}`, l_event)
            .toPromise()
            .then(() => l_event)
            .catch(response => alert(response.json().error));
    }
    delete(l_event) {
        return this.http.delete(`${this._apiUrl}/${l_event.id}`, l_event)
            .toPromise()
            .catch(response => alert(response.json().error));
    }
};
EventRepositoryService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], EventRepositoryService);
exports.EventRepositoryService = EventRepositoryService;
//# sourceMappingURL=event.service.js.map