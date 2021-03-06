"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var courses_component_1 = require("./courses.component");
var authors_component_1 = require("./authors.component");
var course_service_1 = require("./course.service");
var author_service_1 = require("./author.service");
var auto_grow_directive_1 = require("./auto-grow.directive");
var favorite_component_1 = require("./favorite.component");
var like_component_1 = require("./like.component");
var vote_component_1 = require("./vote.component");
var zippy_component_1 = require("./zippy.component");
var contact_form_component_1 = require("./contact-form.component");
var forms_1 = require("@angular/forms");
var subscription_form_component_1 = require("./subscription-form.component");
var signup_form_component_1 = require("./signup-form.component");
var http_1 = require("@angular/http");
var post_service_1 = require("./post.service");
var github_service_1 = require("./github.service");
var github_profile_component_1 = require("./github-profile.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, http_1.JsonpModule],
        declarations: [app_component_1.AppComponent, courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, auto_grow_directive_1.AutoGrowDirective, favorite_component_1.FavoriteComponent,
            like_component_1.LikeComponent, vote_component_1.VoteComponent, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent, subscription_form_component_1.SubscriptionFormComponent,
            signup_form_component_1.SignUpFormComponent, github_profile_component_1.GitHubProfileComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [author_service_1.AuthorService, course_service_1.CourseService, post_service_1.PostService, github_service_1.GitHubService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map