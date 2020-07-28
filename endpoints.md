# Endpoints in API Gods of Arena

**Note :** The return format is JSON.

## Home

Path : / \
Should return "API UP", indicating the API is operational.

## Types

+ GET /types : returns an array with all types of gladiators used

## Gladiators

+ GET /gladiators : returns a list of objects, each one describing a gladiator, with its name, its type and its modifier
+ GET /gladiator/type/:value : returns all gladiators of the type given in argument

Gladiator object format :
```
{
    name: string,
    type: string (only a type already recorded),
    ModifierTitle: string (only a modifier's title already recorded)
}
```

## Modifiers

+ GET /modifiers : returns a list of all modifiers recorded, each one discribed by his title and his options
+ GET /modifiers/title/:value : returns the modifer with the given title

Modifier object format :
```
{
    title: string,
    options: list of strings
}
```
