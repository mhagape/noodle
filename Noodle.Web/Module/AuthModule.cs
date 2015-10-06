using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Net.Http;
using Nancy;
using Nancy.Helpers;
using Nancy.ModelBinding;
using Noodle.Web.Models;

namespace Noodle.Web.Module
{
    public class AuthModule : NancyModule
    {
        public AuthModule()
        {
            Post["auth/google"] = _ =>
            {
                var data = this.Bind<AuthModel>();

                var httpClient = new HttpClient();
                var content = new FormUrlEncodedContent(new[] 
                 {
                    new KeyValuePair<string, string>("code", data.Code),
                    new KeyValuePair<string, string>("client_id", data.ClientId),
                    new KeyValuePair<string, string>("client_secret", "jEat_2HmiulQB36Ks4tUrB7K"),
                    new KeyValuePair<string, string>("redirect_uri", data.RedirectUri),
                    new KeyValuePair<string, string>("grant_type", "authorization_code"),
                 });
                var response = httpClient.PostAsync(new Uri("https://www.googleapis.com/oauth2/v3/token"), content).Result;
                return response.Content.ReadAsStringAsync().Result;
            };

            Post["auth/facebook"] = _ =>
            {
                var data = this.Bind<AuthModel>();

                var httpClient = new HttpClient();
                var queryString = HttpUtility.ParseQueryString(string.Empty);
                queryString["code"] = data.Code;
                queryString["client_id"] = data.ClientId;
                queryString["redirect_uri"] = data.RedirectUri;
                queryString["client_secret"] = "42d9a5fc955d0488794d4791b8f72ba5";

                var response = httpClient.GetAsync(new Uri(string.Format("https://graph.facebook.com/v2.3/oauth/access_token?{0}", queryString.ToString()))).Result;
                return response.Content.ReadAsStringAsync().Result;
            };

        }
    }
}
