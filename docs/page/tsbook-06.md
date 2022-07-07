# 枚举 :beach_umbrella:

## 字面量类型的问题

- 在类型约束位置，会产生重复代码。可以使用类型别名解决该问题。
- 逻辑含义和真实的值产生了混淆，会导致当修改真实值的时候，产生大量的修改。
- 字面量类型不会进入到编译结果。

**枚举通常用于约束某个变量的取值范围**，字面量和联合类型配置使用，也可以达到同样的目标。

**定义一个枚举**

```ts
enum 枚举名 {
    枚举字段1 = 值1,
    枚举字段2 = 值2,
    ...
}
```

```ts
enum Gender {
    male = '男',
    female = '女'
}

let gender: Gender;
gender = Gender.male;// 男
```

:::warning
枚举会出现在编译结果中，编译结果中表现为对象。
:::

## 枚举的规则

- 枚举的字段值只能使用字符串或数字
- 数字枚举的值会自动自增，第一个如果不赋值默认为0
- 被数字枚举约束的变量，可以直接赋值为数字（不建议这样做）
- 数字枚举的编译结果 和 字符串枚举的编译结果有差异

```ts
enum Level {
    level1 = 1,
    level2,
    level3,
}

let l: Level = Level.level2;
console.log(l);// 2
```

```ts
enum Level {
    level1,
    level2,
    level3,
}

// 编译后
{
    "level1": 0,
    "level2": 1,
    "level3": 2,
    0: "level1",
    1: "level2",
    2: "level3"
}
```

## 最佳实践

- 尽量不要在一个枚举中既出现字符串字段，又出现数字字段
- 使用枚举时，尽量使用枚举字段的名称，而不使用真实的值

## 枚举的位运算

针对数字枚举

```ts{9,16,31}
enum Permission {
    Read = 1,   // 0001 可读
    Write = 2,  // 0010 可写
    Create = 4, // 0100 可添加
    Delete = 8  // 1000 可删除
}
// 通过二进制的标识来标示权限位

// 1. 如何组合权限 (使用或运算)
// 0001
// 0010
// 或
// 0011
let p:Permission = Permission.Read | Permission.Write;

// 2. 如何判断是否拥有某个权限 (使用且运算)
// 0011 target
// **** per => 0010
// 且
// 0010
function hasPermission(target:Permission, per:Permission) {
    return (target & per) === per;
}

// 判断变量p是否拥有可读/可写/可添加/可删除权限
console.log(hasPermission(p, Permission.Read))// true
console.log(hasPermission(p, Permission.Write))// true
console.log(hasPermission(p, Permission.Create))// false
console.log(hasPermission(p, Permission.Delete))// false

// 3. 如何删除某个权限 (使用异或运算)
// 0011
// 0010
// 异或
// 0001
p = p ^ Permission.Write;
console.log(hasPermission(p, Permission.Write))// false
```