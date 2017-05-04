var wordFactory = angular.module('wordFactory',[]);

wordFactory.factory('word',function($http)
{
    return $http.get('http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=9&sortOrder=asc&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
}
);
