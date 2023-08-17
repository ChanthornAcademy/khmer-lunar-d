# khmer-lunar-d

## Khmer Lunar Date plugin for Day.js

<!-- install -->

### Install

```bash
npm install --save dayjs
npm install --save khmer-lunar-d
```

<!-- using  -->

### Using TypeScript

```ts
import dayjs from "dayjs";
import toKhDate from "khmer-lunar-d";

dayjs.extend(toKhDate);

dayjs().toKhDate();
```
