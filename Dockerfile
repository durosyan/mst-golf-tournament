## Build
FROM node:18-alpine AS build

WORKDIR /app/golfing-statistics

RUN if ! [ -e ./package.json ]; then echo "File does not exist" && exit 1; fi

RUN yarn install --frozen-lockfile

RUN yarn build

# Production stage
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist

RUN apk add --no-cache openssh-server \
    && echo "root:Docker!" | chpasswd \
    && ssh-keygen -A \
    && sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config \
    && ssh-keygen -t rsa -b 4096 -f /etc/ssh/ssh_host_rsa_key \
    && ssh-keygen -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key \
    && ssh-keygen -t ed25519 -f /etc/ssh/ssh_host_ed25519_key \
    && mkdir /run/sshd

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]
